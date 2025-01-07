exports.handler = async function(event, context) {
    const response = await fetch("https://api.easybroker.com/v1/properties?limit=5", {
        headers: {
            "X-Authorization": "TU_API_KEY",  // Reemplaza con tu API Key
            "Content-Type": "application/json"
        }
    });

    const data = await response.json();
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
};
