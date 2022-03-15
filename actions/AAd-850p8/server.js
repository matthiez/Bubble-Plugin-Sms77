function(properties, context) {
    var response = context.request({
        form: {
            debug: Number(properties.debug),
            from: properties.from,
            json: 1,
            text: properties.text,
            to: properties.to,
            xml: Number(properties.xml),
        },
        headers: {
            SentWith: 'BubbleIO',
            'X-Api-Key': context.keys['ApiKey'],
        },
        method: 'POST',
        uri: 'https://gateway.sms77.io/api/voice',
    })

    const res = JSON.parse(response.body)
    res.message_ids = []
    for (const msg of res.messages) res.message_ids.push(String(msg.id))
    delete res.messages

    return res
}