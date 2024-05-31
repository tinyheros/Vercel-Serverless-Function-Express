import Cors from 'micro-cors';
import { getPlayer, updatePlayer } from '../firebase';

const cors = Cors();

export default cors(async function handler(req, res) {
    const response = await getPlayer(req.body)
    res.status(200).json({
        response
    });
});
