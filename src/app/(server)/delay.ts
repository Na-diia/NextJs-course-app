type DelayOption = 
 | {timeout: number; shouldFail?: boolean}
 | {timeout?: number; shouldFail: boolean}
;

export function delayed<T> (
    data: T,
    options: DelayOption = { shouldFail: false, timeout: 1500 
    }) {
  const {shouldFail, timeout} = options;
  return new Promise<T> ((resolve, reject) => {
    setTimeout(() => (shouldFail ? reject(data) : resolve(data), timeout));
  });
};



