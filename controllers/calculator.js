const calc3 = (amount) => 
amount <= 1000 ? amount * 0.01 : 
amount > 1000 && amount <= 5000 ? ((amount - 1000) * 0.02) + (1000 * 0.01)  
: amount > 5000 ? ((amount - 5000) * 0.03) + (4000 * 0.02) + (1000 * 0.01) : 0 

exports.home = (req, res) => res.send('ydl-tech-test-be');

exports.calculate_interest = (req, res) => {
        let data = calc3(req.params.amount);
        data = data.toString();
        return res.send(data);
};