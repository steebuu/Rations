import { connect } from 'react-redux';
import LikedRecipeIndex from './liked_recipes_index';
import { fetchLikesByUser } from '../../actions/like_actions';


const msp = state => {
    return {
        userId: state.session.user.id,
        userLikes: state.entities.likes
    }
}

const mdp = dispatch => {
   return {
    fetchLikesByUser: (userId) => { dispatch(fetchLikesByUser(userId)) }
   }   
}



export default connect(msp, mdp)(LikedRecipeIndex);