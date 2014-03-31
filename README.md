box
===
一些JavaScript工具方法。

### Box.extend

Merge the contents of two or more objects together into the first object.

@methed Box.extend  
@param {Object} [, {Object}] [, {Object}] Objects you want to merge.  
@return {Object} Retrun merged object.  
@example

	Box.extend(
		{a: 'word'}, 
		{
			a: 'string', 
			b: {
				key: 'value'
			}
		}
	)
		
will return

	{
		a: 'string',
		b: {
			key: 'value'
		}
	}
