import imgLoader from './imgLoader';
import lifeCycle from './lifeCycle';

class SQS_Functions {
	constructor(){
		this.imgLoader = imgLoader;
		this.lifeCycle = lifeCycle;
	}
}

const sqs = new SQS_Functions();

export default sqs;