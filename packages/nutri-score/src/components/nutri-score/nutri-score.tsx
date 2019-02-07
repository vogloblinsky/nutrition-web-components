import { Component, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'nutri-score',
    styleUrl: 'nutri-score.scss',
    shadow: true
})
export class NutriScore {
    /**
     * The score
     */
    @Prop({ mutable: true }) score: string;

    /**
     * The vertical option
     */
    @Prop() vertical: boolean = false;

    @Watch('score')
    validateScore() {
        if (
            !(
                this.score === 'A' ||
                this.score === 'B' ||
                this.score === 'C' ||
                this.score === 'D' ||
                this.score === 'E'
            )
        ) {
            this.score = 'A';
        }
    }

    isValidScore(score) {
        return (
            score === 'A' ||
            score === 'B' ||
            score === 'C' ||
            score === 'D' ||
            score === 'E'
        );
    }

    componentWillLoad() {
        if (!this.isValidScore(this.score)) {
            this.score = 'A';
        }
    }

    render() {
        return (
            <div class={'container ' + (this.vertical ? 'vertical' : '')}>
                <div class="title">NUTRI-SCORE</div>
                <div class="scores-container">
                    <div class="scores">
                        <span class="a">A</span>
                        <span class="b">B</span>
                        <span class="c">C</span>
                        <span class="d">D</span>
                        <span class="e">E</span>
                    </div>
                    <div class={'score ' + this.score.toLowerCase()}>
                        {this.score}
                    </div>
                </div>
            </div>
        );
    }
}
