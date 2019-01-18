import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'nova-badge',
    styleUrl: 'nova.scss',
    shadow: true
})
export class Nova {
    /**
     * The score
     */
    @Prop() score: string;

    render() {
        return <div>{this.score}</div>;
    }
}
