<script setup lang="ts">
  defineOptions({
    name: 'UserAgreement'
  })
</script>

<template>
  <div safe-area-inset-top p-layout-padding class="follow_box">
    <div class="agreement-page">
      <main class="agreement-content">
        <section>
          <p class="intro">
            We hereby advise you to carefully read and understand this
            User Agreement (hereinafter referred to as “Agreement”) before
            registering.
          </p>
          <p>
            Your registration, login, usage, etc. will be deemed as
            acceptance of this Agreement and you agree to be bound by the
            Agreement.
          </p>
        </section>

        <section>
          <h2>1. Account</h2>

          <p>
            <strong>1.1</strong>
            In order to use our services, we may ask you to create an
            Account.
          </p>
          <p>
            <strong>1.2</strong>
            You agree to authorize us to activate other related service
            accounts.
          </p>
          <p>
            <strong>1.3</strong>
            The ownership of the Account belongs to us; you only have the
            right to use it.
          </p>
          <p>
            <strong>1.4</strong>
            You are responsible for maintaining the security of your
            Account.
          </p>
          <p>
            <strong>1.5</strong>
            You shall use the Software correctly and appropriately.
          </p>
          <p>
            <strong>1.6</strong>
            If no activity occurs for one year, we may reclaim the
            Account.
          </p>
        </section>

        <section>
          <h2>2. Service Scope</h2>

          <p>
            <strong>2.1</strong>
            Services include but are not limited to video chat and virtual
            gifts.
          </p>
          <p>
            <strong>2.2</strong>
            We may send promotional or service-related information to you.
          </p>
        </section>

        <section>
          <h2>3. User Information Protection</h2>

          <p>
            <strong>3.1</strong>
            You may be required to submit necessary personal information.
          </p>
          <p>
            <strong>3.2</strong>
            We may collect and use your information in accordance with our
            Privacy Policy.
          </p>
        </section>

        <section>
          <h2>4. Content Requirements and Usage Rules</h2>

          <p>
            You are prohibited from producing, uploading or disseminating
            content that includes:
          </p>

          <ol class="rule-list">
            <li>Threats to national security or public order</li>
            <li>Obscene, pornographic or sexually explicit content</li>
            <li>Violence, gambling, terrorism or harassment</li>
            <li>Defamation, fraud, or infringement of others’ rights</li>
            <li>False information or impersonation</li>
            <li>Advertising or spam content</li>
            <li>Any other illegal or inappropriate content</li>
          </ol>
        </section>

        <section>
          <h2>5. Third Party Products and Services</h2>
          <p>
            We are not responsible for services or products provided by
            third parties.
          </p>
        </section>

        <section>
          <h2>6. Data Storage</h2>
          <p>
            We are not responsible for data deletion or storage failure.
          </p>
        </section>

        <section>
          <h2>7. Risk</h2>
          <p>You bear all risks arising from your use of the Service.</p>
        </section>

        <section>
          <h2>8. Intellectual Property</h2>
          <p>
            All intellectual property rights related to the Software
            belong to us.
          </p>
        </section>

        <section>
          <h2>9. Liability</h2>
          <p>
            We reserve the right to take measures against violations of
            this Agreement.
          </p>
        </section>

        <section>
          <h2>10. Force Majeure and Disclaimer</h2>
          <p>
            We are not liable for service interruptions caused by force
            majeure.
          </p>
        </section>

        <section>
          <h2>11. Miscellaneous</h2>
          <p>
            This Agreement shall be governed by the laws of Hong Kong SAR.
          </p>
        </section>
      </main>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .follow_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: var(--ai-follow-bg-color);
  }
  .agreement-page {
    display: flex;
    flex-direction: column;
    height: calc(
      100% -var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    color: white;
    font-size: 14px;
    line-height: 1.6;
  }

  .agreement-header {
    padding: 16px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }

  .agreement-header h1 {
    font-size: 18px;
    font-weight: 600;
  }

  .agreement-content {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
  }

  .agreement-content section {
    margin-bottom: 20px;
  }

  .agreement-content h2 {
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 600;
  }

  .intro {
    font-weight: 500;
  }

  .rule-list {
    padding-left: 18px;
  }

  .rule-list li {
    margin-bottom: 6px;
  }

  .agreement-footer {
    padding: 12px 16px;
    border-top: 1px solid #eee;
    background: #fff;
  }

  .agree-btn {
    width: 100%;
    height: 44px;
    border: none;
    border-radius: 22px;
    background: #4a6cff;
    color: #fff;
    font-size: 16px;
  }
</style>
