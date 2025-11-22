import { ActionFunctionArgs, data } from "react-router";
import { appStateCookie } from "~/cookie";
import { TAppState } from "~/types/app";

const appStateKeys = ["theme", "fontSize"];

async function getUpdateStateRequestBody(request: Request): Promise<TAppState> {
  const body = await request.json();
  if (!body || typeof body !== "object") {
    throw new Response(JSON.stringify({ msg: "Invalid request body" }), {
      status: 400,
    });
  }

  const keys = Object.keys(body);

  if (keys.length === 0) {
    throw new Response(
      JSON.stringify({ msg: "No key found in request body" }),
      {
        status: 400,
      },
    );
  }

  if (keys.some((key) => !appStateKeys.includes(key))) {
    throw new Response(
      JSON.stringify({ msg: `Invalid key found: ${keys.join(", ")}` }),
      {
        status: 400,
      },
    );
  }

  if ("theme" in body) {
    if (
      typeof body.theme !== "string" ||
      !["light", "dark"].includes(body.theme)
    ) {
      throw new Response(
        JSON.stringify({
          msg: "Invalid theme value, it should be either 'light' or 'dark'",
        }),
        {
          status: 400,
        },
      );
    }
  }

  if ("fontSize" in body) {
    if (
      typeof body.fontSize !== "number" ||
      body.fontSize < 12 ||
      body.fontSize > 24
    )
      throw new Response(
        JSON.stringify({
          msg: "Invalid font size value, it should be a number between 12 and 24",
        }),
        {
          status: 400,
        },
      );
  }

  return body as TAppState;
}

export async function action({ request }: ActionFunctionArgs) {
  const userPreference = await appStateCookie.parse(
    request.headers.get("Cookie"),
  );

  const body = await getUpdateStateRequestBody(request);
  return data(
    {},
    {
      headers: [
        [
          "Set-Cookie",
          await appStateCookie.serialize({
            ...userPreference,
            ...body,
          }),
        ],
      ],
    },
  );
}
