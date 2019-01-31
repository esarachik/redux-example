import waterfallPromises from '../waterfallPromises';

describe('waterfallP promise helper', () => {
	it('returns a resolved promise with no handlers', (done) => {
		waterfallPromises([]).then(done);
	});

	it('executes all handlers', async () => {
		const first = jest.fn();
		const second = jest.fn();
		const last = jest.fn();
		const failed = jest.fn();
		const arg = { test: true };
		const sequence = [];

		await waterfallPromises([
			// executes a regular function
			(input) => {
				// must execute first
				expect(sequence).toEqual([]);

                sequence.push('first');

				first(input);
			},
			// executes a promise-returning function
			(input) => {
				// must execute second
				expect(sequence).toEqual(['first']);
				sequence.push('second');

				second(input);

				return new Promise((resolve) => {
					setTimeout(() => {
						resolve();
					}, 0);
				});
			}
		], arg)
			.then(last)
			.catch(failed);

		expect(first).toHaveBeenCalledTimes(1);
		expect(first).toHaveBeenCalledWith(arg);
		expect(second).toHaveBeenCalledTimes(1);
		expect(second).toHaveBeenCalledWith(arg);
		expect(last).toHaveBeenCalledTimes(1);
		expect(failed).not.toHaveBeenCalled();
	});

	it('reject all handlers in sequence after a rejecting handler', async () => {
		const first = jest.fn();
		const second = jest.fn(() => Promise.resolve().then(() => {
			throw new Error('test error');
		}));
		const third = jest.fn();
		const fourth = jest.fn();
		const last = jest.fn();
		const failed = jest.fn();

		await waterfallPromises([
			first,
			second,
			third,
			fourth
		])
			.then(last)
			.catch(failed);

		expect(first).toHaveBeenCalled();
		expect(second).toHaveBeenCalled();
		expect(third).not.toHaveBeenCalled();
		expect(fourth).not.toHaveBeenCalled();
		expect(last).not.toHaveBeenCalled();
		expect(failed).toHaveBeenCalled();
	});
});
