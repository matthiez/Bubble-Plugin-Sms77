function(properties, context) {
    var response = context.request({
        form: {
            number: properties.number,
            type: 'hlr',
        },
        headers: {
            SentWith: 'BubbleIO',
            'X-Api-Key': context.keys['ApiKey'],
        },
        method: 'POST',
        uri: 'https://gateway.sms77.io/api/lookup',
    })

    const res = JSON.parse(response.body)

    res.current_carrier_network_code = res.current_carrier.network_code
    res.current_carrier_name = res.current_carrier.name
    res.current_carrier_country = res.current_carrier.country
    res.current_carrier_network_type = res.current_carrier.network_type
    delete res.current_carrier

    res.original_carrier_network_code = res.original_carrier.network_code
    res.original_carrier_name = res.original_carrier.name
    res.original_carrier_country = res.original_carrier.country
    res.original_carrier_network_type = res.original_carrier.network_type
    delete res.original_carrier

    return res
}