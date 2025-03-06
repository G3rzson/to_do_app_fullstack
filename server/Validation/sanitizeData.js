const validator = require('validator');

module.exports = function sanitizeData(task) {
    // Sanitize input data
    if (task) {
        task = validator.trim(task);
        console.log('sanitized task:', task);
    }

    return task;
}