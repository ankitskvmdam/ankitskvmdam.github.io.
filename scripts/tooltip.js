function addTooltip() {
    tippy('.theme-toggle', {
        content: 'Change theme',
    })

    tippy('#github', {
        content: 'GitHub'
    })

    tippy('#gitlab', {
        content: 'GitLab'
    })

    tippy('#linkedin', {
        content: 'Linkedin'
    })

    tippy('#email', {
        content: 'Email'
    })

    tippy('#prev-page', {
        content: 'Previous Page'
    })
    
    tippy('#next-page', {
        content: 'Next Page'
    })

}

export {
    addTooltip
}