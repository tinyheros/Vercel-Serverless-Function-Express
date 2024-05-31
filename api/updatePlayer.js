import Cors from 'micro-cors';
import { updatePlayer } from '../firebase';

const cors = Cors();

export default cors(async function handler(req, res) {
    let response;
    try {
        response = await updatePlayer(req.body)
        res.status(200).json({
            response
        });
    } catch (error) {
        res.status(500).json({
            response
        });
    }
});
