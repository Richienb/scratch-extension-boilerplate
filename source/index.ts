/* global Scratch */
/// <reference types="scratch-env"/>

class ExampleExtension implements ScratchExtension {
	getInfo(): ExtensionMetadata {
		return {
			id: "ExampleExtension",
			name: "Greeter",
			blocks: [{
				opcode: "greet",
				blockType: Scratch.BlockType.REPORTER,
				text: "Greet [name]",
				arguments: {
					name: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: "Richie"
					}
				}
			}]
		}
	}

	greet({ name }: { name: string }): string {
		return `Hello ${name}!`
	}
}

Scratch.extensions.register(new ExampleExtension())
