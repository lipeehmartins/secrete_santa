export default function authHeader() {
    const user = localStorage.getItem('token');

    if (user && user.Token) {
        return {Authorization: 'Bearer ' + user.Token};
    } else {
        return {};
    }
}