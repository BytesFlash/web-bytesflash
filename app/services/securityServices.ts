import { MethodsServices } from '../helper/MethodsServices';

const $MethodService = new MethodsServices();

export default class SecurityServicesProvider {
    // Login
    public async sendLoginRequest(email: string, password: string) {
        const res = await $MethodService.post('login', {
            user: { email, password },
        });

        const accessToken = res.headers.get('authorization');
        const resJson = await res.json();

        if (res.status !== 200) {
            return { details: resJson.details, error: resJson.code, token: accessToken };
        }

        return { details: resJson.details, error: resJson.code, token: accessToken };
    }

    public async getUsersEmail(email: string, token: string) {
        const res = await $MethodService.get(`users/email/${email}`, {
            headers: { Authorization: token },
        });

        const resJson = await res.json();
        return resJson;
    }


}


