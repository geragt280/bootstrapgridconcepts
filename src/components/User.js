import ApiCalls from "./ApiCalls";
export default class User{

    email = '';
    password = '';
    token = '';
    urerId = 0;

    api = new ApiCalls();

    items = [];

    async loginUser(useremail, password, setUserToken){
        this.email = useremail;
        this.password = password;
        const body = {
            email: this.email,
            password: this.password,
        };
        const response = await this.api.postReqAxios("/api/login", body);
        console.log(response);
        if (response.status == 400) {
            console.log('Login error:', response);
        }
        else{
            setUserToken(response.data);
            return response;
        }
        // console.log('Array', items);
        // function(response) {
        //     console.log(response.data);
        //     setUserToken(response.data);
        //   }
    }

}