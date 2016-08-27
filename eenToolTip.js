
// rules tooltips for cards

class ToolTip extends PIXI.Sprite {

	constructor(texture) {

		super(texture);

		this.visible = false;

		this.anchor.set(0.5);

		this.scale.set(1.1);

		stage.addChild(this);
	}
}

var tooltipBlueShield = new ToolTip(textureRulesBlueShield);
var tooltipDelayedBlast = new ToolTip(textureRulesDelayedBlast);
var tooltipDoubleSkip = new ToolTip(textureRulesDoubleSkip);
var tooltipDrawTwo = new ToolTip(textureRulesDrawTwo);
var tooltipFucker = new ToolTip(textureRulesFucker);
var tooltipGlasnost = new ToolTip(textureRulesGlasnost);
var tooltipHarvesterOfSorrows = new ToolTip(textureRulesHarvesterOfSorrows);
var tooltipHolyDefender = new ToolTip(textureRulesHolyDefender);
var tooltipHotDeath = new ToolTip(textureRulesHotDeath);
var tooltipLuckyClover = new ToolTip(textureRulesLuckyClover);
var tooltipMagicFive = new ToolTip(textureRulesMagicFive);
var tooltipMutuallyAssuredDestruction = new ToolTip(textureRulesMutuallyAssuredDestruction);
var tooltipMysteryDraw = new ToolTip(textureRulesMysteryDraw);
var tooltipNumber = new ToolTip(textureRulesNumber);
var tooltipQuitter = new ToolTip(textureRulesQuitter);
var tooltipReverse = new ToolTip(textureRulesReverse);
var tooltipReverseSkip = new ToolTip(textureRulesReverseSkip);
var tooltipShitter = new ToolTip(textureRulesShitter);
var tooltipSixtyNine = new ToolTip(textureRulesSixtyNine);
var tooltipSkip = new ToolTip(textureRulesSkip);
var tooltipSpreader = new ToolTip(textureRulesSpreader);
var tooltipVirus = new ToolTip(textureRulesVirus);
var tooltipWild = new ToolTip(textureRulesWild);
var tooltipWildDrawFour = new ToolTip(textureRulesWildDrawFour);
