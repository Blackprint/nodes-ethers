if(false){ // Avoid executing line below when this file being compiled
// You can just copy and paste code below as a template for creating nodes

Blackprint.registerNode("Ethers/FeatureName/Empty",
class extends Blackprint.Node {
	static input = {};
	static output = {};

	constructor(instance){
		super(instance);

		let iface = this.setInterface();
		iface.title = "Empty";
	}
});

Blackprint.registerInterface('BPIC/Ethers/FeatureName/Empty',
Context.IFace.Empty = class EmptyIFace extends Blackprint.Interface{
	constructor(node){
		super(node);

		// Add some properties for this object
	}
});

Blackprint.Sketch.registerInterface('BPIC/Ethers/FeatureName/Empty', {
	template: null
}, Context.IFace.Empty);


}