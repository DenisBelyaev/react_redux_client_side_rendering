import config from '../conf/.configloaderrc'
import merge from 'node-config-loader/utils/merge'

function getRuntimeConfig({settings, location, referrer}) {
    return {
        env: {
            origin: location.origin,
            hash: location.hash,
            pathname: location.pathname,
            search: location.search,
            referrer: referrer
        },
        config: {
            debug: settings.debug,
            sitePrefix: settings.sitePrefix,
            locale: {
                lang: settings.locale
            }
        }
    }
}

export default function getConfig(opts) {
    return merge(config, getRuntimeConfig(opts))
}