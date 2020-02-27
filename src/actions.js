export const FETCH_USER = 'FETCH_USER'
export const ADD_ITEM = 'ADD_ITEM'

const fetchingUser = user => {
    return {
        type: FETCH_USER,
        user
    }
}

export const addItem = item => {
    return {
        type: ADD_ITEM,
        item
    }
}

export const fetchUser = () => {
    return async function(dispatch) {   
        const url = 'http://www.mocky.io/v2/5e57ece43000002278fd3edc'
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => { 
            console.log(data)
            dispatch(fetchingUser(data))
        })
      
        
    }
  }


