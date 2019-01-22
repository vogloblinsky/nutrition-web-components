import { Component, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'nova-badge',
    styleUrl: 'nova.scss',
    shadow: true
})
export class Nova {
    /**
     * The score
     */
    @Prop({ mutable: true }) score: string;

    @Watch('score')
    validateScore() {
        if (
            this.score === '1' ||
            this.score === '2' ||
            this.score === '3' ||
            this.score === '4'
        ) {
            this.getScoreCSSClass();
        } else {
            this.score = '1';
        }
    }

    /**
     * Transform score to CSS class
     */
    private getScoreCSSClass(): string {
        let scoreClass = '';
        switch (this.score) {
            case '1':
                scoreClass = 'one';
                break;
            case '2':
                scoreClass = 'two';
                break;
            case '3':
                scoreClass = 'three';
                break;
            case '4':
                scoreClass = 'four';
                break;
            default:
                scoreClass = 'one';
                break;
        }
        return scoreClass;
    }

    render() {
        return (
            <div class="container">
                <div class="title">NOVA</div>
                <div class={'score ' + this.getScoreCSSClass()}>
                    {this.score}
                </div>
            </div>
        );
    }
}
