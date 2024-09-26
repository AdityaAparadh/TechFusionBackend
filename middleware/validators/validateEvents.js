function validateEvents(events) {
    
    const validEvents = ["CodeCrush", "CodeDuet", "Bid2Build"];
    if (events.length > 3) {
        return false;
    }
    const uniqueEvents = new Set(events);
    if (uniqueEvents.size !== events.length) {
        return false;
    }
    for (let event of events) {
        if (!validEvents.includes(event)) {
            return false;
        }
    }
    return true;
}

module.exports = validateEvents