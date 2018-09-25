const BASE_MEDIA_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://movemaison-media.s3.amazonaws.com'
        : 'http://localhost:8000'

export default photo => `${BASE_MEDIA_URL}/media/${photo}`
