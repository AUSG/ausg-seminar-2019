# [실습 1] 본격적인 실습 시작! 나만의 달리기 게임을 만들어보자!
import React, {useState, useEffect} from 'react'
import {Layout} from '../'

const STATUS = {
  STOP: 'STOP',
  START: 'START',
  PAUSE: 'PAUSE',
  OVER: 'OVER'
}

const JUMP_DELTA = 5
const JUMP_MAX_HEIGHT = 53

export const Runner = () => {
  let imageLoadCount = 0
    let onImageLoaded = () => {
      ++imageLoadCount
      if (imageLoadCount === 3) {
        this.draw()
      }
    }

    let skyImage = new Image()
    let groundImage = new Image()
    let playerImage = new Image()
    let playerLeftImage = new Image()
    let playerRightImage = new Image()
    let playerDieImage = new Image()
    let obstacleImage = new Image()

    skyImage.onload = onImageLoaded
    groundImage.onload = onImageLoaded
    playerImage.onload = onImageLoaded

    skyImage.src = require('../../assets/cloud.png')
    groundImage.src = require('../../assets/ground.png')
    playerImage.src = require('../../assets/dinosaur.png')
    playerLeftImage.src = require('../../assets/dinosaur_left.png')
    playerRightImage.src = require('../../assets/dinosaur_right.png')
    playerDieImage.src = require('../../assets/dinosaur_die.png')
    obstacleImage.src = require('../../assets/obstacle.png')

    this.options = {
      fps: 80,
      skySpeed: 40,
      groundSpeed: 160,
      skyImage: skyImage,
      groundImage: groundImage,
      playerImage: [playerImage, playerLeftImage, playerRightImage, playerDieImage],
      obstacleImage: obstacleImage,
      skyOffset: 0,
      groundOffset: 0,
      ...this.props.options
    }

    let status = STATUS.STOP
    let timer = null
    let score = 0
    let highScore = window.localStorage ? window.localStorage['highScore'] || 0 : 0
    let jumpHeight = 0
    let jumpDelta = 0
    let obstaclesBase = 1
    let obstacles = obstaclesGenerate()
    let currentDistance = 0
    let playerStatus = 0


  useEffect(() => {
    const onSpacePress = () => {
    switch (this.status) {
      case STATUS.STOP:
        this.start()
        break
      case STATUS.START:
        this.jump()
        break
      case STATUS.OVER:
        this.restart()
        break
        default:
        break
    }
  }
    window.onkeypress = function (e) {
      if (e.key === ' ') {
        onSpacePress()
      }
    }

    window.onblur = this.pause
    window.onfocus = this.goOn
    return function cleanup() {
      window.onblur = null
      window.onfocus = null
    }
  })

    const draw = () => {
      if (!this.canvas) {
        return
      }
  
      const { options } = this
  
      let level = Math.min(200, Math.floor(this.score / 100))
      let groundSpeed = (options.groundSpeed + level) / options.fps
      let skySpeed = options.skySpeed / options.fps
      let obstacleWidth = options.obstacleImage.width
      let playerWidth = options.playerImage[0].width
      let playerHeight = options.playerImage[0].height
  
      const ctx = this.canvas.getContext('2d')
      const { width, height } = this.canvas
  
      ctx.clearRect(0, 0, width, height)
      ctx.save()
  
      this.options.skyOffset = this.options.skyOffset < width
        ? (this.options.skyOffset + skySpeed)
        : (this.options.skyOffset - width)
      ctx.translate(-this.options.skyOffset, 0)
      ctx.drawImage(this.options.skyImage, 0, 0)
      ctx.drawImage(this.options.skyImage, this.options.skyImage.width, 0)
  
      this.options.groundOffset = this.options.groundOffset < width
        ? (this.options.groundOffset + groundSpeed)
        : (this.options.groundOffset - width)
      ctx.translate(this.options.skyOffset - this.options.groundOffset, 0)
      ctx.drawImage(this.options.groundImage, 0, 76)
      ctx.drawImage(this.options.groundImage, this.options.groundImage.width, 76)
  
      ctx.translate(this.options.groundOffset, 0)
      ctx.drawImage(this.options.playerImage[this.playerStatus], 80, 64 - this.jumpHeight)
  
      this.jumpHeight = this.jumpHeight + this.jumpDelta
      if (this.jumpHeight <= 1) {
        this.jumpHeight = 0
        this.jumpDelta = 0
      }
      else if (this.jumpHeight < JUMP_MAX_HEIGHT && this.jumpDelta > 0) {
        this.jumpDelta = (this.jumpHeight * this.jumpHeight) * 0.001033 - this.jumpHeight * 0.137 + 5
      }
      else if (this.jumpHeight < JUMP_MAX_HEIGHT && this.jumpDelta < 0) {
        // jumpDelta = (jumpHeight * jumpHeight) * 0.00023 - jumpHeight * 0.03 - 4
      }
      else if (this.jumpHeight >= JUMP_MAX_HEIGHT) {
        this.jumpDelta = -JUMP_DELTA / 2.7
      }
  
      let scoreText = (this.status === STATUS.OVER ? 'GAME OVER  ' : '') + Math.floor(this.score)
      ctx.font = "Bold 18px Arial"
      ctx.textAlign = "right"
      ctx.fillStyle = "#595959"
      ctx.fillText(scoreText, width - 30, 23)
      if (this.status === STATUS.START) {
        this.score += 0.5
        if (this.score > this.highScore) {
          this.highScore = this.score
          window.localStorage['highScore'] = this.score
        }
        this.currentDistance += groundSpeed
        if (this.score % 4 === 0) {
          this.playerStatus = (this.playerStatus + 1) % 3
        }
      }
      if (this.highScore) {
        ctx.textAlign = "left"
        ctx.fillText('HIGH  ' + Math.floor(this.highScore), 30, 23)
      }
  
      
      let pop = 0
      for (let i = 0; i < this.obstacles.length; ++i) {
        if (this.currentDistance >= this.obstacles[i].distance) {
          let offset = width - (this.currentDistance - this.obstacles[i].distance + groundSpeed)
          if (offset > 0) {
            ctx.drawImage(options.obstacleImage, offset, 84)
          }
          else {
            ++pop
          }
        }
        else {
          break
        }
      }
      for (let i = 0; i < pop; ++i) {
        this.obstacles.shift()
      }
      if (this.obstacles.length < 5) {
        this.obstacles = this.obstacles.concat(this.obstaclesGenerate())
      }
      
      let firstOffset = width - (this.currentDistance - this.obstacles[0].distance + groundSpeed)
      if (90 - obstacleWidth < firstOffset
        && firstOffset < 60 + playerWidth
        && 64 - this.jumpHeight + playerHeight > 84) {
        this.stop()
      }
  
      ctx.restore()
    }

    const obstaclesGenerate = () => {
      let res = []
      for (let i = 0; i < 10; ++i) {
        let random = Math.floor(Math.random() * 100) % 60
        random = (Math.random() * 10 % 2 === 0 ? 1 : -1) * random
        res.push({
          distance: random + this.obstaclesBase * 200
        })
        ++this.obstaclesBase
      }
      return res
    }
    const setTimer = () => {
      this.timer = setInterval(() => this.draw(), 1000 / this.options.fps)
    }
    const clearTimer = () => {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
    }
    const clear = () => {
      this.score = 0
      this.jumpHeight = 0
      this.currentDistance = 0
      this.obstacles = []
      this.obstaclesBase = 1
      this.playerStatus = 0
    }

    const start = () => {
      if (this.status === STATUS.START) {
        return
      }
  
      this.status = STATUS.START
      this.setTimer()
      this.jump()
    }
    const pause = () => {
      if (this.status === STATUS.START) {
        this.status = STATUS.PAUSE
        this.clearTimer()
      }
    }
    const goOn = () => {
      if (this.status === STATUS.PAUSE) {
        this.status = STATUS.START
        this.setTimer()
      }
    }
    const stop = () => {
      if (this.status === STATUS.OVER) {
        return
      }
      this.status = STATUS.OVER
      this.playerStatus = 3
      this.clearTimer()
      this.draw()
      this.clear()
    }
    const restart = () => {
      this.obstacles = this.obstaclesGenerate()
      this.start()
    }

  const jump = () => {
    if (this.jumpHeight > 2) {
      return
    }
    this.jumpDelta = JUMP_DELTA
    this.jumpHeight = JUMP_DELTA
  }
    return (
      <Layout>
        <canvas id="canvas" ref={ref => this.canvas = ref} height={160} width={340} />
      </Layout>
    )
}
