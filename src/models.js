import { thinky, type } from './thinky';

export const User = thinky.createModel('users', {
	id: type.string(),
});
