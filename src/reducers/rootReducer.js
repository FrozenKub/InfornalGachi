const initialState = {
    type: '',
    token: ''

};

export default function rootReducer(state = initialState, action )
{
    switch (action.type) {
        case "APPLY_TOKEN":
            console.log("rootReducer")
            state.push({
                type: 'APPLY_TOKEN',
                token: action.token
            })
            break;


        case "ALERT_POST":
            alert("Post was Created!")
            break;
    }
    return state
}