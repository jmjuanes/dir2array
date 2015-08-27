//Read dependencies
var fs = require('fs');

//SimpleScan class
var dir2array = new function()
{
	//Version
	this.version = '0.1.0';
	
	//Scan function
	this.Scan = function(dir)
	{
		//Save the parent
		var parent = dir;
		
		//Check if the las character is a /
		if(parent.slice(-1) !== '/')
		{
			//Add
			parent = parent + '/';
		}
		
		//Check if directory exists
		if(this.DirExists(parent))
		{
			//Creates the dir structure
			return this.RecursiveDir(parent, '');
		}
	};
	
	//Scan dir
	this.RecursiveDir = function(parent, dir)
	{
		//Array
		var result = [];
		
		//Scan the dir
		var scan = fs.readdirSync(parent + '/' + dir);
		
		//Read the results
		for(var i = 0; i < scan.length; i++)
		{
			//Check if is a dir
			if(this.IsDir(parent + dir + scan[i]))
			{
				//If is a dir, call recursive function
				var result2 = this.RecursiveDir(parent, dir + scan[i] + '/');
				
				//Merge the two arrays
				result = result.concat(result2);
			}
			else
			{
				//Add to the results
				result.push(dir + scan[i]);
			}
		}
		
		//Return result
		return result;
	};
	
	//Check if result is a dir
	this.IsDir = function(item)
	{
		//Check
		var is = fs.lstatSync(item).isDirectory();
		
		//Return
		return is;
	};
	
	//Check if dir exists
	this.DirExists = function(dir)
	{
		//Try to query the dir
		try
		{
			//Get the status
			var stats = fs.lstatSync(dir);
			
			//Is a directory
			if(stats.isDirectory())
			{
				//Directory exists
				return true;
			}
			else
			{
				//Show warning
				console.error('Error: "' + dir + '" is not a directory.');
				
				//Return false
				return false;
			}
		}
		catch(e)
		{
			//Show error
			console.error('Error: directory "' + dir + '" does not exist.');
			
			//Return false
			return false;
		}
	};
};

//Exports
module.exports = dir2array;
