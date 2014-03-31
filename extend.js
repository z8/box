void function(global) {
	if (!global.Box) {
		global.Box = {};
	}
}(window)

/**
Merge the contents of two or more objects together into the first object.

@methed Box.extend
@param {Object} [, {Object}] [, {Object}] Objects you want to merge.
@return {Object} Retrun merged object.
@example
   Box.extend({a: 'word'}, {a: 'string', b: {key: 'value'}})
**/
void function(Box){
	var extend,
		_extend,
		_isObject;

	_isObject = function(o){
		return Object.prototype.toString.call(o) === '[object Object]';
	}

	_extend = function self(destination, source) {
		var property;
		for (var property in destination) {
			if (destination.hasOwnProperty(property)) {

				// when destination[property] is object and source[property] also is object
				if (_isObject(destination[property]) && _isObject(source[property])) {
					self(destination[property], source[property]);
				};

				if (source.hasOwnProperty(property)) {
					continue;
				} else {
					source[property] = destination[property];
				}
			}
		}
	}

	extend = function(){
		var arr = arguments,
			result = {},
			i;

		if (!arr.length) return {};

		for (i = arr.length - 1; i >= 0; i--) {
			if (_isObject(arr[i])) {
				_extend(arr[i], result);
			};
		}

		arr[0] = result;
		return result;
	}

	Box.extend = extend;
}(window.Box)