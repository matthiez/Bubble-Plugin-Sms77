function(properties, context) {
    console.log('properties', properties)

    var response = context.request({
        form: {
            debug: Number(properties.debug),
            delay: properties.delay ? properties.delay.getTime() : null,
            flash: Number(properties.flash),
            foreign_id: properties.foreign_id,
            from: properties.from,
            json: 1,
            label: properties.label,
            no_reload: Number(properties.no_reload),
            performance_tracking: Number(properties.performance_tracking),
            text: properties.text,
            to: properties.to,
            ttl: Number(properties.ttl),
        },
        headers: {
            SentWith: 'BubbleIO',
            'X-Api-Key': context.keys['ApiKey'],
        },
        method: 'POST',
        uri: 'https://gateway.sms77.io/api/sms',
    })

    const res = JSON.parse(response.body)
    res.message_ids = []
    for (const msg of res.messages) res.message_ids.push(String(msg.id))
    delete res.messages

    console.log('res', res)

    return res
}