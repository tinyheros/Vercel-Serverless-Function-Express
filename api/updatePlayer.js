import Cors from 'micro-cors';

const cors = Cors();

export default cors(async function handler(req, res) {

    const { data } = req.body;
    
    try {
        res.status(200).json({
            data
        });
    } catch (error) {
        res.status(500).json({
            message: "Error processing request",
            error: error.message
        });
    }
});
