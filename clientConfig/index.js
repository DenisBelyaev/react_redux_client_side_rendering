import getConfig from './getConfig'

export default config = getConfig({
    settings: window.settings || {},
    location: window.location,
    referrer: document.referrer
})

