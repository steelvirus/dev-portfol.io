/** @param {Env} env **/
export default (env) => {
    return {
        dashDomain: env.get('dashDomain') ?? 'dash.latus.local',
        api: env.get('api') ?? 'http://api.latus.local:80/v1/'
    };
};