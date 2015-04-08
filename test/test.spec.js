'use strict';

describe("String Calculator", function(){
	var Calculator1 = new StringKata();
	describe("Instantiate", function(){
		it("Instantiation works", function(){
			expect(Calculator1).to.be.instanceOf(StringKata);
		})
	})
	describe("add", function(){
		it("Null gives zero", function(){
			expect(Calculator1.add("")).to.be.equal(0);
		})
		it("'1' gives 1", function(){
			expect(Calculator1.add("1")).to.be.equal(1);
		})
		it("'1,2' gives 3", function(){
			expect(Calculator1.add("1,2")).to.be.equal(3);
		})
		it("'1\\n2,3' gives 6", function(){
			expect(Calculator1.add("1\n2,3")).to.be.equal(6);
		})
		it("'1\\n2000,3' gives 4", function(){
			expect(Calculator1.add("1\n2000,3")).to.be.equal(4);
		})
		it("'1\\n-2,-3' to throw error with -2 and -3", function(){
			expect(function() {Calculator1.add("1\n-2,-3")}).to.throw(Error, /-2,-3/);
		})
		it("'//;\\n1;2;3' gives 6", function(){
			expect(Calculator1.add("//;\n1;2;3")).to.be.equal(6);
		})
		it("'//xxx\\n1xxx2xxx3' gives 6", function(){
			expect(Calculator1.add("//xxx\n1xxx2xxx3")).to.be.equal(6);
		})
		it("'//[;][xxx]\\n1;2xxx3' gives 6", function(){
			expect(Calculator1.add("//[;][xxx]\n1;2xxx3")).to.be.equal(6);
		})
	})
});