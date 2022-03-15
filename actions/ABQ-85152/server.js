function(properties, context) {
    var response = context.request({
        form: {
            json: 1,
            number: properties.number,
            type: 'mnp',
        },
        headers: {
            SentWith: 'BubbleIO',
            'X-Api-Key': context.keys['ApiKey'],
        },
        method: 'POST',
        uri: 'https://gateway.sms77.io/api/lookup',
    })

    const res = JSON.parse(response.body)

    res.mnp_country = res.mnp.country
    res.mnp_international_formatted = res.mnp.international_formatted
    res.mnp_isPorted = res.mnp.isPorted
    res.mnp_mccmnc = res.mnp.mccmnc
    res.mnp_national_format = res.mnp.national_format
    res.mnp_network = res.mnp.network
    res.mnp_number = res.mnp.number
    delete res.mnp

    return res
}