import Cors from 'micro-cors';
import { getPlayer, updatePlayer } from '../firebase';

const cors = Cors();

export default cors(async function handler(req, res) {
    let response;
    try {
const response = await getPlayer(req.body.address)
        res.status(200).json({
            response
        });
    } catch (error) {
        res.status(500).json({
            response
        });
    }
});
