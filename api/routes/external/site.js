var Site = {};
var _ = AA.Lodash;
Site.submitContactForm = {
    method: 'POST',
    path: '/api/site/contactus',
    config: {
        handler: function (request, reply) {
            var args = _.merge(request.params, request.payload);
            return reply({
                code: 'OK',
                body: {
                    text: 'Thanks!'
                }
            });
        }
    }
};

module.exports = Site;