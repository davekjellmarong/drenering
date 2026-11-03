// PostHog (statistics and session replay), rendered into <head> on every page
// by app/layout.tsx. Same setup as the owner's other site: EU cloud, session
// replay on every visit, all form inputs masked, no consent banner (a
// conscious, temporary choice; when a banner is added, init with
// opt_out_capturing_by_default: true and call posthog.opt_in_capturing() /
// opt_out_capturing() from its buttons).
//
// The loader line is copied verbatim from posthog.com/docs/libraries/js; don't
// rewrite it. The project token is public by design. If it is ever replaced by the
// "[...]" placeholder, PostHog doesn't load.
export const POSTHOG_SNIPPET = `
var POSTHOG_TOKEN = 'phc_w5TkJQLVokwjoXTSRKRswBYDBLNmHnPEHuhGHdbBUUKv';
var POSTHOG_HOST = 'https://eu.i.posthog.com';
if (POSTHOG_TOKEN.charAt(0) !== '[') {
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init(POSTHOG_TOKEN, {
    api_host: POSTHOG_HOST,
    defaults: '2026-05-30',
    session_recording: { maskAllInputs: true }
  });
}
`;
