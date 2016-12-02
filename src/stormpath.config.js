'use strict';

/**
* @ngdoc object
*
* @name stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
*
* @description
*
* This constant allows you to configure the internal settings of the module,
* such as authentication endpoints and the names of events. These properties
* must be modified within a config block.
*
* **Example:**
* <pre>
*     angular.module('myapp')
*       .config(function(STORMPATH_CONFIG){
*           STORMPATH_CONFIG.ENDPOINT_PREFIX = 'http://api.mydomain.com';
*       });
* </pre>
*/

angular.module('stormpath.CONFIG',[])
.constant('STORMPATH_CONFIG',(function stormpathConfigBuilder(){
  var c={
    /**
    * @ngdoc property
    *
    * @name AUTHENTICATION_SUCCESS_EVENT_NAME
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$authenticated`
    *
    * The name of the event that is fired when a user logs in, after
    * successfully submitting the login form.
    *
    */
    AUTHENTICATION_SUCCESS_EVENT_NAME: '$authenticated',


    /**
    * @ngdoc property
    *
    * @name AUTHENTICATION_FAILURE_EVENT_NAME
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$authenticationFailure`
    *
    * The name of the event that is fired when the user posts
    * invalid login credentials to the login form.
    */
    AUTHENTICATION_FAILURE_EVENT_NAME: '$authenticationFailure',


    /**
    * @ngdoc property
    *
    * @name AUTH_SERVICE_NAME
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$auth`
    *
    * The name of the authentication service, this changes the
    * service name that you inject.
    */
    AUTH_SERVICE_NAME: '$auth',


    /**
    * @ngdoc property
    *
    * @name SOCIAL_LOGIN_SERVICE_NAME
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$socialLogin`
    *
    * The name of the social login service, this changes the
    * service name that you inject.
    */
    SOCIAL_LOGIN_SERVICE_NAME: '$socialLogin',

    /**
    * @ngdoc property
    *
    * @name SOCIAL_LOGIN_RESPONSE_TYPE
    *
    * The response type requested from the Stormpath Social Login v2 API.
    * Determines the type of token that will be returned for OAuth authentication
    * against the Stormpath OAuth API, when making social login attempts.
    */
    SOCIAL_LOGIN_RESPONSE_TYPE: 'stormpath_token',

    /**
    * @ngdoc property
    *
    * @name SOCIAL_LOGIN_OPTIONS
    *
    * Options that are set for a given social authentication provider when
    * making a social authentication request. These are appended to the request
    * as query parameters, and will override any default options, or options
    * set in the Stormpath admin console.
    *
    * The settings are mapped by providerId of a directory (e.g. `google`, `facebook`).
    */
    SOCIAL_LOGIN_OPTIONS: {
      google: {},
      facebook: {},
      twitter: {},
      linkedIn: {}
    },

    /**
    * @ngdoc property
    *
    * @name SOCIAL_LOGIN_REDIRECT_URI
    *
    * The URI that the social login flow will redirect to after a login attempt.
    * This URI is relative to the base application URI.
    */
    SOCIAL_LOGIN_REDIRECT_URI: '',

    /**
    * @ngdoc property
    *
    * @name SOCIAL_LOGIN_AUTHORIZE_URI
    *
    * The relative URI of the endpoint used for social auth.
    * Should <b>not</b> be changed if Client API is used.
    */
    SOCIAL_LOGIN_AUTHORIZE_ENDPOINT: '/authorize',

    /**
    * @ngdoc property
    *
    * @name AUTHENTICATION_ENDPOINT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `/login`
    *
    * The URI that the login form will post to.  The endpoint MUST accept data
    * in the following format:
    *
    * ```
    * {
    *     username: '',
    *     password: ''
    * }
    * ```
    */
    AUTHENTICATION_ENDPOINT: '/login',


    /**
    * @ngdoc property
    *
    * @name CURRENT_USER_URI
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `/me`
    *
    * The URI that is used to fetch the account object of
    * the currently logged in user.  This endpoint MUST:
    *  * Respond with a JSON object that is the Stormpath account object,
    *  if the user has an active session.
    *  * Respond with `401 Unauthorized` if the user has no session.
    */
    CURRENT_USER_URI: '/me',


    /**
    * @ngdoc property
    *
    * @name DESTROY_SESSION_ENDPOINT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `/logout`
    *
    * The URL that the {@link stormpath.spLogout:spLogout spLogout} directive
    * will make a GET request to, this endpoint MUST delete the access token
    * cookie, XSRF token cookie, and any other cookies that relate to the user
    * session.
    */
    DESTROY_SESSION_ENDPOINT: '/logout',


    /**
    * @ngdoc property
    *
    * @name EMAIL_VERIFICATION_ENDPOINT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `/verify`
    *
    * The endpoint that is used for verifying an account that requires email
    * verification.  Used by
    * {@link stormpath.userService.$user#methods_verify $user.verify()} to POST
    * the `sptoken` that was delivered to the user by email.
    *
    * This endpoint MUST accept a POST request with the following format and
    * use Stormpath to verify the token:
    * ```
    * {
    *   sptoken: '<token from email sent to user>'
    * }
    * ```
    *
    */
    EMAIL_VERIFICATION_ENDPOINT: '/verify',


    /**
    * @ngdoc property
    *
    * @name ENDPOINT_PREFIX
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: *none*
    *
    * A prefix, e.g. "base URL" to add to all endpoints that are used by this SDK.
    * Use this if your backend API is running on a different port or domain than
    * your Angular application.  Omit the trailing forward slash.
    *
    * **NOTE:** This may trigger
    * [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS)
    * behaviour in the browser, and your server
    * will need to respond to requests accordingly.  If you are using our
    * Express SDK see
    * [allowedOrigins](https://github.com/stormpath/stormpath-sdk-express#allowedOrigins)
    *
    * **Example:**
    * <pre>
    *   ENDPOINT_PREFIX = 'http://api.mydomain.com'
    * </pre>
    */
    ENDPOINT_PREFIX: '',


    /**
    * @ngdoc property
    *
    * @name GET_USER_EVENT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$currentUser`
    *
    * The name of the event that is fired when
    * {@link stormpath.userService.$user#methods_get $user.get()}
    * is resolved with a user object.
    */
    GET_USER_EVENT: '$currentUser',


    /**
    * @ngdoc property
    *
    * @name NOT_LOGGED_IN_EVENT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$notLoggedin`
    *
    * The name of the event that is fired when
    * {@link stormpath.userService.$user#methods_get $user.get()}
    * is rejected without a user.
    */
    NOT_LOGGED_IN_EVENT: '$notLoggedin',


    /**
    * @ngdoc property
    *
    * @name FORGOT_PASSWORD_ENDPOINT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `/forgot`
    *
    * The endpoint that is used by
    * {@link stormpath.userService.$user#methods_passwordResetRequest $user.passwordResetRequest()}
    * to create password reset tokens.
    */
    FORGOT_PASSWORD_ENDPOINT: '/forgot',


    /**
    * @ngdoc property
    *
    * @name CHANGE_PASSWORD_ENDPOINT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `/change`
    *
    * The endpoint that is used by
    * {@link stormpath.userService.$user#methods_verifyPasswordResetToken $user.verifyPasswordResetToken()} and
    * {@link stormpath.userService.$user#methods_resetPassword $user.resetPassword()}
    * to verify and consume password reset tokens (change a user's password with the token).
    */
    CHANGE_PASSWORD_ENDPOINT: '/change',


    /**
    * @ngdoc property
    *
    * @name SESSION_END_EVENT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$sessionEnd`
    *
    * The name of the event that is fired when the user logs out via the
    * {@link stormpath.spLogout:spLogout spLogout}
    * directive
    */
    SESSION_END_EVENT: '$sessionEnd',

    SESSION_END_ERROR_EVENT: '$sessionEndError',


    /**
    * @ngdoc property
    *
    * @name STATE_CHANGE_UNAUTHENTICATED
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$stateChangeUnauthenticated`
    *
    * The name of the event that is fired when the user attempts to visit a
    * UI Router state that requires authentication, but the user is not
    * authenticated.
    */
    STATE_CHANGE_UNAUTHENTICATED: '$stateChangeUnauthenticated',


    /**
    * @ngdoc property
    *
    * @name STATE_CHANGE_UNAUTHORIZED
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$stateChangeUnauthorized`
    *
    * The name of the event that is fired when the user attempts to visit a
    * UI Router state that has an access control rule which the user does not
    * meet (such as not being in a specified group)
    */
    STATE_CHANGE_UNAUTHORIZED: '$stateChangeUnauthorized',


    /**
    * @ngdoc property
    *
    * @name ROUTE_CHANGE_UNAUTHENTICATED
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$routeChangeUnauthenticated`
    *
    * The name of the event that is fired when the user attempts to visit a
    * route that requires authentication, but the user is not
    * authenticated.
    */
    ROUTE_CHANGE_UNAUTHENTICATED: '$routeChangeUnauthenticated',


    /**
    * @ngdoc property
    *
    * @name ROUTE_CHANGE_UNAUTHORIZED
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$routeChangeUnauthorized`
    *
    * The name of the event that is fired when the user attempts to visit a
    * route that has an access control rule which the user does not
    * meet (such as not being in a specified group)
    */
    ROUTE_CHANGE_UNAUTHORIZED: '$routeChangeUnauthorized',

    /**
    * @ngdoc property
    *
    * @name OAUTH_REQUEST_ERROR
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$oAuthRequestError`
    *
    * The name of the event that is fired when the user attempts OAuth-based
    * authentication, and fails due to an OAuth issue.
    */
    OAUTH_REQUEST_ERROR: '$oAuthRequestError',

    /**
    * @ngdoc property
    *
    * @name OAUTH_AUTHENTICATION_ENDPOINT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `/oauth/token`
    *
    * The endpoint that is used to authenticate and refresh using OAuth tokens.
    * This endpoint MUST support password and refresh_token grant authentication
    * flows.
    */
    OAUTH_AUTHENTICATION_ENDPOINT: '/oauth/token',

    /**
    * @ngdoc property
    * @name OAUTH_REVOKE_ENDPOINT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `/oauth/revoke`
    *
    * The endpoint that is used to revoke OAuth tokens.
    */
    OAUTH_REVOKE_ENDPOINT: '/oauth/revoke',

    /**
    * @ngdoc property
    * @name OAUTH_REVOKE_ENDPOINT
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * The name under which tokens are stored in the token storage mechanism.
    * Might not be relevant if the underlying storage mechanism is not key-value
    * based.
    *
    * See {@link stormpath.tokenStore.TokenStoreManager TokenStoreManager} for more detail.
    */
    OAUTH_TOKEN_STORAGE_NAME: 'stormpath:token',

    /**
    * @ngdoc property
    *
    * @name REGISTER_URI
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `/register`
    *
    * The endpoint that is used by
    * {@link stormpath.userService.$user#methods_create $user.create()}
    * to POST new users.  This endpoint MUST accept a stormpath account object
    * and use Stormpath to create the new user.
    */
    REGISTER_URI: '/register',

    /**
    * @ngdoc property
    *
    * @name REGISTERED_EVENT_NAME
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `$registered`
    *
    * The name of the event that is fired when
    * {@link stormpath.userService.$user#methods_create $user.create()}
    * is resolved with an account that was successfully created
    */
    REGISTERED_EVENT_NAME: '$registered',

    /**
    * @ngdoc property
    *
    * @name OAUTH_DEFAULT_TOKEN_STORE_TYPE
    *
    * @propertyOf stormpath.STORMPATH_CONFIG:STORMPATH_CONFIG
    *
    * @description
    *
    * Default: `localStorage`
    *
    * The default type of local storage used by
    * {@link stormpath.oauth.StormpathOAuthTokenProvider}.
    */
    OAUTH_DEFAULT_TOKEN_STORE_TYPE: 'localStorage'

  };

  c.getUrl = function(key) {
    return this.ENDPOINT_PREFIX + this[key];
  };

  c.getSocialLoginConfiguration = function(key) {
    var canonicalKey = key ? key.toLowerCase() : '';
    return this.SOCIAL_LOGIN_OPTIONS[canonicalKey] || {};
  };
  return c;
})());
