export const logger = (functionName: string, ...args) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${functionName}]:`, ...args);
  }
  
  
// Higher-order function to automatically log function name
export const withLogger = (fn: Function) =>{
    return function(...args) {
      logger(fn.name, 'Function called with arguments:', args);
      const result = fn(...args);
      logger(fn.name, 'Function result:', result);
      return result;
    };
  }
  