import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'nutri-score',
    styleUrl: 'nutri-score.scss',
    shadow: true
})
export class NutriScore {
    /**
     * The score
     */
    @Prop() score: string;

    render() {
        return <div>{this.score}</div>;
    }
}
