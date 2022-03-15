function(properties, context) {
    var response = context.request({
        form: {
            number: properties.number,
            type: 'cnam',
        },
        headers: {
            SentWith: 'BubbleIO',
            'X-Api-Key': context.keys['ApiKey'],
        },
        method: 'POST',
        uri: 'https://gateway.sms77.io/api/lookup',
    })

    return JSON.parse(response.body)
}
