// ==========================================================================
// Plyr supported types and providers
// ==========================================================================

export const providers = {
    html5: 'html5',
    vimeo: 'vimeo',
};

export const types = {
    audio: 'audio',
    video: 'video',
};

/**
 * Get provider by URL
 * @param {String} url
 */
export function getProviderByUrl(url) {

    // Vimeo
    if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
        return providers.vimeo;
    }

    return null;
}

export default { providers, types };
