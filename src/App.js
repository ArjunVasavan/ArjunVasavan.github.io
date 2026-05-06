import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const commands = [
    'whoami',
    'cat skills.txt',
    'ls projects/',
    'cat contact.txt',
  ];

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(commands[0]);
  const [commandsIdx, setCommandsIdx] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (text && currentIndex < text.length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const revealText = () => {
      setIsVisible(true);
      setIdx(idx + 1);
      setCurrentText('');
      setCurrentIndex(0);
      setCommandsIdx(idx % 2 !== 0 ? commandsIdx : commandsIdx + 1);
      setText(commands[commandsIdx]);
    };
    const delay = 800 + idx * 200;
    const timeoutId = setTimeout(revealText, delay);
    return () => clearTimeout(timeoutId);
  }, [idx]);

  useEffect(() => {
    if (isTyping) {
      setCursorVisible(true);
      return;
    }
    const blinkInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, [isTyping]);

  const Cursor = () => (
    <span style={{ color: '#fff', opacity: cursorVisible ? 1 : 0 }}>█</span>
  );

  const activePrompt = isTyping ? (idx <= 1 ? 0 : idx <= 3 ? 1 : idx <= 5 ? 2 : 3) : -1;

  return (
    <div className="App">
      <div className="body">

        {/* whoami */}
        <div className="code-block">
          <div>
            <span id="a">arjun@archlinux</span>:<span id="b">~</span>
            <span id="c">$</span>
            <span id="z"> {idx === 0 ? currentText : commands[0]}</span>
            {activePrompt === 0 && <Cursor />}
          </div>
          {isVisible && idx >= 1 && (
            <div id="g" style={{ marginTop: '4px' }}>
              arjun vasavan
            </div>
          )}
        </div>

        {/* skills */}
        {isVisible && idx >= 2 && (
          <div className="code-block">
            <div>
              <span id="a">arjun@archlinux</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 2 ? currentText : commands[1]}</span>
              {activePrompt === 1 && <Cursor />}
            </div>
            {isVisible && idx >= 3 && (
              <>
                <div className="code-block" id="w">
                  <div>==============</div>
                  <div>ROOT VARIABLES</div>
                  <div>==============</div>
                </div>
                <div className="code-block">
                  <span id="f">role</span>
                  <span id="z"> = "Embedded Systems Engineer"</span>
                </div>
                <div className="code-block">
                  <span id="f">education</span>
                  <span id="z"> = "B.Tech ECE, College of Engineering Chengannur (Jun 2025)"</span>
                </div>
                <div className="code-block">
                  <span id="f">languages</span>
                  <span id="z"> = ['C', 'C++']</span>
                </div>
                <div className="code-block">
                  <span id="f">embedded</span>
                  <span id="z"> = ['PIC18F4580', 'GPIO', 'UART', 'SPI', 'I2C', 'CAN', 'LCD']</span>
                </div>
                <div className="code-block">
                  <span id="f">systems</span>
                  <span id="z"> = ['Linux syscalls', 'IPC', 'TCP/UDP sockets', 'pThreads']</span>
                </div>
                <div className="code-block">
                  <span id="f">tools</span>
                  <span id="z"> = ['Vim', 'Neovim', 'GCC', 'GDB', 'Make', 'Git']</span>
                </div>
                <div className="code-block">
                  <span id="f">ds</span>
                  <span id="z"> = ['Linked Lists', 'Trees', 'Stacks', 'Hash Tables', 'Red-Black Trees']</span>
                </div>
              </>
            )}
          </div>
        )}

        {/* projects */}
        {isVisible && idx >= 4 && (
          <div className="code-block">
            <div>
              <span id="a">arjun@archlinux</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 4 ? currentText : commands[2]}</span>
              {activePrompt === 2 && <Cursor />}
            </div>
            {isVisible && idx >= 5 && (
              <>
                <div className="code-block" id="w">
                  <div>====================</div>
                  <div>PROJECTS</div>
                  <div>====================</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>
                    <a href="https://github.com/ArjunVasavan/tcp_ip_remote_process_manager" target="_blank" rel="noreferrer" style={{ color: '#ff0883', textDecoration: 'none' }}>
                      linux-remote-process-manager/
                    </a>
                  </div>
                  <div id="op">TCP-based remote process diagnostics tool — inspect memory, CPU, file descriptors and ports of Linux processes on a remote machine. Lightweight remote htop.</div>
                  <div id="w">stack: C · Linux System Programming · TCP Sockets · /proc FS · Signals</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>
                    <a href="https://github.com/ArjunVasavan/car_black_box" target="_blank" rel="noreferrer" style={{ color: '#ff0883', textDecoration: 'none' }}>
                      car-black-box-system/
                    </a>
                  </div>
                  <div id="op">PIC18F4580 automotive black box — logs speed, gear, timestamp and collision events to EEPROM with circular buffer, 10 persistent entries across power cycles.</div>
                  <div id="w">stack: Embedded C · PIC18F4580 · I2C · ADC · UART · DS1307 RTC</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>
                    <a href="https://github.com/ArjunVasavan/can_bus_node_communication_system" target="_blank" rel="noreferrer" style={{ color: '#ff0883', textDecoration: 'none' }}>
                      can-bus-communication/
                    </a>
                  </div>
                  <div id="op">CAN protocol between PIC18F4580 nodes for automotive data exchange (temp, speed) with LCD real-time monitoring, node ID config and persistent storage.</div>
                  <div id="w">stack: Embedded C · CAN Protocol · PIC18F4580 · Interrupts · LCD</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>
                    <a href="https://github.com/ArjunVasavan/trivial_file_transfer_protocol" target="_blank" rel="noreferrer" style={{ color: '#ff0883', textDecoration: 'none' }}>
                      tftp-implementation/
                    </a>
                  </div>
                  <div id="op">UDP-based TFTP from scratch per RFC 1350 — file upload/download with opcode processing, block numbering, ACK sync and termination logic.</div>
                  <div id="w">stack: C · UDP Sockets · Linux syscalls · Network Protocol Design</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>
                    <a href="https://github.com/ArjunVasavan/interactive_unix_like_shell" target="_blank" rel="noreferrer" style={{ color: '#ff0883', textDecoration: 'none' }}>
                      minishell/
                    </a>
                  </div>
                  <div id="op">Unix-like interactive shell — internal and external commands, parsing, process creation, piping and I/O redirection.</div>
                  <div id="w">stack: C · Process Management · Signals · System Calls</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>
                    <a href="https://github.com/ArjunVasavan/red_black_tree_c" target="_blank" rel="noreferrer" style={{ color: '#ff0883', textDecoration: 'none' }}>
                      red-black-tree/
                    </a>
                  </div>
                  <div id="op">Self-balancing Red-Black Tree in C — insertion, deletion, search and min/max at guaranteed O(log n) via rotations and color-based balancing.</div>
                  <div id="w">stack: C · Data Structures · Dynamic Memory Allocation</div>
                </div>

                <div className="code-block">
                  <div id="e" style={{ fontWeight: 'bold' }}>
                    <a href="https://github.com/ArjunVasavan/source_to_html_c" target="_blank" rel="noreferrer" style={{ color: '#ff0883', textDecoration: 'none' }}>
                      c-to-html-syntax-highlighter/
                    </a>
                  </div>
                  <div id="op">C source to HTML converter — FSM-based tokenizer classifying comments, strings, preprocessor directives, keywords and numbers into syntax-highlighted HTML.</div>
                  <div id="w">stack: C · FSM · Tokenization · File I/O · Function Pointers</div>
                </div>
              </>
            )}
          </div>
        )}

        {/* contact */}
        {isVisible && idx >= 6 && (
          <div className="code-block">
            <div>
              <span id="a">arjun@archlinux</span>:<span id="b">~</span>
              <span id="c">$</span>
              <span id="z"> {idx === 6 ? currentText : commands[3]}</span>
              {activePrompt === 3 && <Cursor />}
            </div>
            {isVisible && idx >= 7 && (
              <>
                <div className="code-block" id="w">
                  <div>================</div>
                  <div>EXPERIENCE</div>
                  <div>================</div>
                </div>
                <div className="code-block">
                  <div id="z">
                    [Jun 2025 – Present] <b>Embedded Systems Trainee</b>,{' '}
                    <span id="link">
                      <a href="https://emertxe.com" target="_blank" rel="noreferrer">
                        Emertxe Information Technologies
                      </a>
                    </span>
                  </div>
                  <div id="op" style={{ marginTop: '4px' }}>
                    Spot Award for Outstanding Performance — Oct 2025
                  </div>
                </div>

                <div className="code-block" id="w">
                  <div>================</div>
                  <div>RÉSUMÉ</div>
                  <div>================</div>
                  <div id="z">
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">resume.pdf</a>
                  </div>
                </div>

                <div className="code-block" id="w">
                  <div>================</div>
                  <div>CONTACT</div>
                  <div>================</div>
                  <div id="z">
                    [<span id="link"><a href="https://github.com/ArjunVasavan" target="_blank" rel="noreferrer">github</a></span>]
                    {' '}[<span id="link"><a href="https://linkedin.com/in/arjun-vasavan" target="_blank" rel="noreferrer">linkedin</a></span>]
                    {' '}[<span id="link"><a href="https://leetcode.com/u/ArjunVasavan" target="_blank" rel="noreferrer">leetcode</a></span>]
                    {' '}[<span id="link"><a href="mailto:vasavanarjun@gmail.com">mail</a></span>]
                  </div>
                </div>

                {/* final blinking cursor - only shows after everything is done */}
                {idx >= 8 && (
                  <div className="code-block">
                    <span id="a">arjun@archlinux</span>:<span id="b">~</span>
                    <span id="c">$</span>
                    <span id="z"> </span>
                    <Cursor />
                  </div>
                )}
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
