var GA_TARGET = "Hello World";

function fitness(chromosome){
	var fitness_value = 0;
	for(var i = 0; i < GA_TARGET.length; i++){
		fitness_value += GA_TARGET.charCodeAt(i) - chromosome.charCodeAt(i);
	}
	return fitness_value;
}

function createPopulation(size){
	var population = [];
	for(var i=0; i < size; i++){
		population.push(randomString(GA_TARGET.length));
	}
	return population;
}

function randomString(length){
	var str = [];
	for(var i = 0; i < length; i++){
		str.push(String.fromCharCode(Math.ceil(Math.random() * 256 )));
	}
	
	return str.join('');
}

function sortByFitness(chromosomeA, chromosomeB){
	var a = fitness(chromosomeA);
	var b = fitness(chromosomeB);

	//Compare "a" and "b" in some fashion, and return -1, 0, or 1
	return a-b;
}

function createOffspring(parentA, parentB){
	var newChromosome = [];
	for(var i = 0; i < GA_TARGET.length; i++){
		if(i%2){
			newChromosome.push(parentA[i]);
		}else{
			newChromosome.push(parentB[i]);
		}
	}
	return newChromosome.join('');
}

function mutate(population){
	var newPopulation = [] ;
	for(var i = 0; i < population.length; i++){
		var newChromosome = [];
		if(Math.random() > 0.7){
			for(var j = 0; j < GA_TARGET.length; j++){
				if(Math.random() > 0.7){
					newChromosome.push(randomString(1));
				}else{
					newChromosome.push(population[i][j]);
				}
			}
			newPopulation.push(newChromosome.join(''));
		}else{
			newPopulation.push(population[i]);
		}
	}
	return newPopulation;
}

var population = createPopulation(10);
population.sort(sortByFitness);
console.log(population);
population = mutate(population);
console.log(population);