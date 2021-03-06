const minFilter = 3
module.exports = {
    TOKEN_EXPIRATION: 12,
    MONGO_ID_LENGTH: 24,
    QUERY_LIMIT: 33,
    MIN_FILTER: minFilter,
    FILTER_ERROR: 'Can only filter by >= ' + minFilter + ' characters',
    ID_ERROR: 'Missing or invalid id',
    NOT_FOUND: 'Object id was not found',
    UNKNOWN: 'Unknown',
    EMAIL_FROM: 'Rate My Classes',
    EMAIL_GREETING: 'Hello',
    EMAIL_SUBJECT: 'Login Link',
    EMAIL_CALL_TO_ACTION: 'Follow the link below to sign in to ratemyclasses:',
    INVALID_EMAIL: 'Email is not valid',
    NO_TOKEN: 'Request missing authorization token',
    BAD_TOKEN: 'Token is not authorized'
}