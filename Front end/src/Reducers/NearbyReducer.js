var destinations = [
    {
        _id: '1',
        name: 'yosra',
        phone: '2323232323',
        email: 'yosra@gmail.com'
    },
    {
        _id: '2',
        name: 'ness',
        phone: '000000',
        email: 'nessrine@gmail.com'
    }
]

const NearbyReducer = (state = destinations, action) => {
    switch (action.type) {
        case 'ADD_DESTINATION':
            return (
                state.concat(action.newdestination)
            )
        case 'EDIT_DESTINATION':
            return (
                state.map(el => el._id === action.editdestination._id ? el = action.editdestination : el)
            )
        case 'REMOVE_DESTINATION':
            return (
                state.filter(el => el._id !== action._id)
            )
        case 'UPDATE_DESTINATION':
            return (
                state = action.destinations
            )
        case 'INIT_DESTINATION':
            return (
                state = action.destinations
            )
    default:
            return state
    }
}
export default NearbyReducer;