/**
 * Execute handlers sequentially, rejecting the rest as soon as one fails.
 * @param {function[]} handlers - An array of handlers, some of which could return promises.
 * @param {Object} arg - The argument passed to each handler.
 */
export default (handlers, arg) => handlers.reduce(
	// Start all the handlers at once
	(lastHandler, handler) => lastHandler
		// Each handler waits for the previous handler to finish
		.then(() => Promise.resolve(handler(arg)))
		// ...or rejects if the previous handler also rejected
		.catch(() => Promise.reject(arg)),
	// Start chaining promises by creating the first resolved promise to wait on
	Promise.resolve()
);


