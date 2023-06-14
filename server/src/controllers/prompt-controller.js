const openai = require('../config/openaikm');
const inputPrompt = require('../models/inputPrompt');

module.exports = {
    async sendText(req, res){
        const openaiAPI = openai.configuration();
        const inputModel = new inputPrompt(req.body)
        try {
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            );
            return res.status(200).json({
                sucess:true,
                data: response.data.choices[0].text
            });
        } catch (err) {
            return res.status(500).json({
                sucess:false,
                error: error.response ? error.response : "There was an inssue on the server"
            });
        }


    }
}